import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5493Component } from './my-comp-5493.component';

describe('MyComp5493Component', () => {
  let component: MyComp5493Component;
  let fixture: ComponentFixture<MyComp5493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
