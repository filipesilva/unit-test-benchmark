import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6514Component } from './my-comp-6514.component';

describe('MyComp6514Component', () => {
  let component: MyComp6514Component;
  let fixture: ComponentFixture<MyComp6514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
