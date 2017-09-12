import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3480Component } from './my-comp-3480.component';

describe('MyComp3480Component', () => {
  let component: MyComp3480Component;
  let fixture: ComponentFixture<MyComp3480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
