import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3553Component } from './my-comp-3553.component';

describe('MyComp3553Component', () => {
  let component: MyComp3553Component;
  let fixture: ComponentFixture<MyComp3553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
