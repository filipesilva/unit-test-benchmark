import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3469Component } from './my-comp-3469.component';

describe('MyComp3469Component', () => {
  let component: MyComp3469Component;
  let fixture: ComponentFixture<MyComp3469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
