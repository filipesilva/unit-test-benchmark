import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3099Component } from './my-comp-3099.component';

describe('MyComp3099Component', () => {
  let component: MyComp3099Component;
  let fixture: ComponentFixture<MyComp3099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
