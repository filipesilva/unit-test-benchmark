import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3568Component } from './my-comp-3568.component';

describe('MyComp3568Component', () => {
  let component: MyComp3568Component;
  let fixture: ComponentFixture<MyComp3568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
