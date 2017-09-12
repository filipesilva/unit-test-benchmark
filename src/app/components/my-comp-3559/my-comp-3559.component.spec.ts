import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3559Component } from './my-comp-3559.component';

describe('MyComp3559Component', () => {
  let component: MyComp3559Component;
  let fixture: ComponentFixture<MyComp3559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
