import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6768Component } from './my-comp-6768.component';

describe('MyComp6768Component', () => {
  let component: MyComp6768Component;
  let fixture: ComponentFixture<MyComp6768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
