import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4721Component } from './my-comp-4721.component';

describe('MyComp4721Component', () => {
  let component: MyComp4721Component;
  let fixture: ComponentFixture<MyComp4721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
