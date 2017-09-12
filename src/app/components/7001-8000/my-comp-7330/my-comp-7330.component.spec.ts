import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7330Component } from './my-comp-7330.component';

describe('MyComp7330Component', () => {
  let component: MyComp7330Component;
  let fixture: ComponentFixture<MyComp7330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
