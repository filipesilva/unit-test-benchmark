import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6351Component } from './my-comp-6351.component';

describe('MyComp6351Component', () => {
  let component: MyComp6351Component;
  let fixture: ComponentFixture<MyComp6351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
