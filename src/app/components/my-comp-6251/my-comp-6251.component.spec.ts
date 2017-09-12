import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6251Component } from './my-comp-6251.component';

describe('MyComp6251Component', () => {
  let component: MyComp6251Component;
  let fixture: ComponentFixture<MyComp6251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
