import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5997Component } from './my-comp-5997.component';

describe('MyComp5997Component', () => {
  let component: MyComp5997Component;
  let fixture: ComponentFixture<MyComp5997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
