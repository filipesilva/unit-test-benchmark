import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6813Component } from './my-comp-6813.component';

describe('MyComp6813Component', () => {
  let component: MyComp6813Component;
  let fixture: ComponentFixture<MyComp6813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
