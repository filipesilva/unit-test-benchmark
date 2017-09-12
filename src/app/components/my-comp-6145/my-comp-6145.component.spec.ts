import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6145Component } from './my-comp-6145.component';

describe('MyComp6145Component', () => {
  let component: MyComp6145Component;
  let fixture: ComponentFixture<MyComp6145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
