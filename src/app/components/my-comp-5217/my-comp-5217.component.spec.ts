import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5217Component } from './my-comp-5217.component';

describe('MyComp5217Component', () => {
  let component: MyComp5217Component;
  let fixture: ComponentFixture<MyComp5217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
