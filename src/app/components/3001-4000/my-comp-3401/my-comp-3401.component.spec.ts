import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3401Component } from './my-comp-3401.component';

describe('MyComp3401Component', () => {
  let component: MyComp3401Component;
  let fixture: ComponentFixture<MyComp3401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
