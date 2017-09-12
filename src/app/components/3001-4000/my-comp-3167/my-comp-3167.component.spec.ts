import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3167Component } from './my-comp-3167.component';

describe('MyComp3167Component', () => {
  let component: MyComp3167Component;
  let fixture: ComponentFixture<MyComp3167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
