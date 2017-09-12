import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9949Component } from './my-comp-9949.component';

describe('MyComp9949Component', () => {
  let component: MyComp9949Component;
  let fixture: ComponentFixture<MyComp9949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
