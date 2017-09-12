import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3826Component } from './my-comp-3826.component';

describe('MyComp3826Component', () => {
  let component: MyComp3826Component;
  let fixture: ComponentFixture<MyComp3826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
