import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6190Component } from './my-comp-6190.component';

describe('MyComp6190Component', () => {
  let component: MyComp6190Component;
  let fixture: ComponentFixture<MyComp6190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
