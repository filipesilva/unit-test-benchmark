import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6970Component } from './my-comp-6970.component';

describe('MyComp6970Component', () => {
  let component: MyComp6970Component;
  let fixture: ComponentFixture<MyComp6970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
