import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4417Component } from './my-comp-4417.component';

describe('MyComp4417Component', () => {
  let component: MyComp4417Component;
  let fixture: ComponentFixture<MyComp4417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
