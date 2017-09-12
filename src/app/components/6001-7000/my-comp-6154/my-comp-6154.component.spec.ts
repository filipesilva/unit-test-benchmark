import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6154Component } from './my-comp-6154.component';

describe('MyComp6154Component', () => {
  let component: MyComp6154Component;
  let fixture: ComponentFixture<MyComp6154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
