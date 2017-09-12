import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3539Component } from './my-comp-3539.component';

describe('MyComp3539Component', () => {
  let component: MyComp3539Component;
  let fixture: ComponentFixture<MyComp3539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
