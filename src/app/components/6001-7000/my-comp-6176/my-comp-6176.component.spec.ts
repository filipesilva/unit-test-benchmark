import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6176Component } from './my-comp-6176.component';

describe('MyComp6176Component', () => {
  let component: MyComp6176Component;
  let fixture: ComponentFixture<MyComp6176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
