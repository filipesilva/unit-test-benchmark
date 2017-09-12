import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3133Component } from './my-comp-3133.component';

describe('MyComp3133Component', () => {
  let component: MyComp3133Component;
  let fixture: ComponentFixture<MyComp3133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
