import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4578Component } from './my-comp-4578.component';

describe('MyComp4578Component', () => {
  let component: MyComp4578Component;
  let fixture: ComponentFixture<MyComp4578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
