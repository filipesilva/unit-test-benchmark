import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7701Component } from './my-comp-7701.component';

describe('MyComp7701Component', () => {
  let component: MyComp7701Component;
  let fixture: ComponentFixture<MyComp7701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
