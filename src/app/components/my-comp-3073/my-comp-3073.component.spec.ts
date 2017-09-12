import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3073Component } from './my-comp-3073.component';

describe('MyComp3073Component', () => {
  let component: MyComp3073Component;
  let fixture: ComponentFixture<MyComp3073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
