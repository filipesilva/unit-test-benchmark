import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3763Component } from './my-comp-3763.component';

describe('MyComp3763Component', () => {
  let component: MyComp3763Component;
  let fixture: ComponentFixture<MyComp3763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
