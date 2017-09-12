import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4559Component } from './my-comp-4559.component';

describe('MyComp4559Component', () => {
  let component: MyComp4559Component;
  let fixture: ComponentFixture<MyComp4559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
