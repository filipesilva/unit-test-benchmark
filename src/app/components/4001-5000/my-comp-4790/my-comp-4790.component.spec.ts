import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4790Component } from './my-comp-4790.component';

describe('MyComp4790Component', () => {
  let component: MyComp4790Component;
  let fixture: ComponentFixture<MyComp4790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
