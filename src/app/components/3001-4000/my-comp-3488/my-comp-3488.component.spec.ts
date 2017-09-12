import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3488Component } from './my-comp-3488.component';

describe('MyComp3488Component', () => {
  let component: MyComp3488Component;
  let fixture: ComponentFixture<MyComp3488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
