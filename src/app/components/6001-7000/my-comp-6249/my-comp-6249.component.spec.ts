import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6249Component } from './my-comp-6249.component';

describe('MyComp6249Component', () => {
  let component: MyComp6249Component;
  let fixture: ComponentFixture<MyComp6249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
