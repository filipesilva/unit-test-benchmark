import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6866Component } from './my-comp-6866.component';

describe('MyComp6866Component', () => {
  let component: MyComp6866Component;
  let fixture: ComponentFixture<MyComp6866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
