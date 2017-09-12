import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3498Component } from './my-comp-3498.component';

describe('MyComp3498Component', () => {
  let component: MyComp3498Component;
  let fixture: ComponentFixture<MyComp3498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
