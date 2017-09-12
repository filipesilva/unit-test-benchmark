import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9037Component } from './my-comp-9037.component';

describe('MyComp9037Component', () => {
  let component: MyComp9037Component;
  let fixture: ComponentFixture<MyComp9037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
