import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3443Component } from './my-comp-3443.component';

describe('MyComp3443Component', () => {
  let component: MyComp3443Component;
  let fixture: ComponentFixture<MyComp3443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
