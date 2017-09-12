import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3495Component } from './my-comp-3495.component';

describe('MyComp3495Component', () => {
  let component: MyComp3495Component;
  let fixture: ComponentFixture<MyComp3495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
