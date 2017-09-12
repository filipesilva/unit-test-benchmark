import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3194Component } from './my-comp-3194.component';

describe('MyComp3194Component', () => {
  let component: MyComp3194Component;
  let fixture: ComponentFixture<MyComp3194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
