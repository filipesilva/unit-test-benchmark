import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6043Component } from './my-comp-6043.component';

describe('MyComp6043Component', () => {
  let component: MyComp6043Component;
  let fixture: ComponentFixture<MyComp6043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
