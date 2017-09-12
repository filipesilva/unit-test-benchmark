import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3029Component } from './my-comp-3029.component';

describe('MyComp3029Component', () => {
  let component: MyComp3029Component;
  let fixture: ComponentFixture<MyComp3029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
