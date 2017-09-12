import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7266Component } from './my-comp-7266.component';

describe('MyComp7266Component', () => {
  let component: MyComp7266Component;
  let fixture: ComponentFixture<MyComp7266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
