import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6800Component } from './my-comp-6800.component';

describe('MyComp6800Component', () => {
  let component: MyComp6800Component;
  let fixture: ComponentFixture<MyComp6800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
