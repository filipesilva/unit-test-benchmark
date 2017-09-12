import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6138Component } from './my-comp-6138.component';

describe('MyComp6138Component', () => {
  let component: MyComp6138Component;
  let fixture: ComponentFixture<MyComp6138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
