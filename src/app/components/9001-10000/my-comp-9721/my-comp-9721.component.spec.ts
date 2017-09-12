import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9721Component } from './my-comp-9721.component';

describe('MyComp9721Component', () => {
  let component: MyComp9721Component;
  let fixture: ComponentFixture<MyComp9721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
