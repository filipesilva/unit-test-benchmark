import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9601Component } from './my-comp-9601.component';

describe('MyComp9601Component', () => {
  let component: MyComp9601Component;
  let fixture: ComponentFixture<MyComp9601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
