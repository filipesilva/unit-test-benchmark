import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6912Component } from './my-comp-6912.component';

describe('MyComp6912Component', () => {
  let component: MyComp6912Component;
  let fixture: ComponentFixture<MyComp6912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
