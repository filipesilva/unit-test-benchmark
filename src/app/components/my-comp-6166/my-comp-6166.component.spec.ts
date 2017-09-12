import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6166Component } from './my-comp-6166.component';

describe('MyComp6166Component', () => {
  let component: MyComp6166Component;
  let fixture: ComponentFixture<MyComp6166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
