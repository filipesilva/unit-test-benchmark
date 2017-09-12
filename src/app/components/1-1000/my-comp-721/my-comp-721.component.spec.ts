import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp721Component } from './my-comp-721.component';

describe('MyComp721Component', () => {
  let component: MyComp721Component;
  let fixture: ComponentFixture<MyComp721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
