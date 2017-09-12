import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3518Component } from './my-comp-3518.component';

describe('MyComp3518Component', () => {
  let component: MyComp3518Component;
  let fixture: ComponentFixture<MyComp3518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
