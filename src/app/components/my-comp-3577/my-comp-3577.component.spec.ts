import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3577Component } from './my-comp-3577.component';

describe('MyComp3577Component', () => {
  let component: MyComp3577Component;
  let fixture: ComponentFixture<MyComp3577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
